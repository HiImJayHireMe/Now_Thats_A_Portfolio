"""
This is a functional programming implementation of a cognitive AI agent employing case-based reasoning
implementing a modification of the kNN algorithm.

This file is completely runnable out of the box, so just hit run and enjoy the show :)

What you are watching is the red hunter bot chasing a blue bot which is taking pseudo-random evasive maneuvers.
The red hunter bot learns the blue bot's behavior and attempts to anticipate its position, then move to the position
where the blue bot will be.

The red bot has no prior knowledge of how the blue bot moves.  It observes data points
and then makes predictions, learning as it goes.  Additionally, the hunter bot cannot see the true position
of the prey bot.  The hunter bot must take sensor readings (black dots).

Legend
======
Red Dot -- hunter bot (and hunter bot trail)
Green Dot -- prey bot current position
Blue Dot -- prey bot trail
Black Dot -- what the hunter bot "sees"
"""

import itertools
import random
from functools import partial
import math
import turtle


##############
# demo utils #
##############

def demo(hunter_bot, target_bot, next_move_fcn, OTHER=None, visualization=False):
    """Returns True if your next_move_fcn successfully guides the hunter_bot
    to the target_bot. This function is here to help you understand how we
    will grade your submission."""
    max_distance = 1.94 * target_bot.distance  # 1.94 is an example. It will change.
    separation_tolerance = 0.02 * target_bot.distance  # hunter must be within 0.02 step size to catch target
    caught = False
    ctr = 0

    if visualization:
        visualize = init_visualization(target_bot)

    # We will use your next_move_fcn until we catch the target or time expires.
    while not caught and ctr < 1000:

        # Check to see if the hunter has caught the target.
        hunter_position = (hunter_bot.x, hunter_bot.y)
        target_position = (target_bot.x, target_bot.y)
        separation = distance_between(hunter_position, target_position)
        if separation < separation_tolerance:
            print "You got it right! It took you ", ctr, " steps to catch the target."
            caught = True

        # The target broadcasts its noisy measurement
        target_measurement = target_bot.sense()

        # This is where YOUR function will be called.
        turning, distance, OTHER = next_move_fcn(hunter_position, hunter_bot.heading, target_measurement, max_distance,
                                                 OTHER)

        # Don't try to move faster than allowed!
        if distance > max_distance:
            distance = max_distance

        # We move the hunter according to your instructions
        hunter_bot.move(turning, distance)

        # The target continues its (nearly) circular motion.
        target_bot.move_in_circle()

        ctr += 1
        if ctr >= 1000:
            print "It took too many steps to catch the target."

        if visualization:
            visualize(hunter_position, target_position, target_measurement)

    return caught


###################
# rendering utils #
###################


def init_visualization(target_bot, size_multiplier=12.0):
    # For Visualization

    init_window(color='white', size=size_multiplier)

    prey_bot = get_bot('green', 'turtle')
    hunter_bot = get_bot('red', 'circle')
    trail = get_bot('blue', 'arrow')
    sensor_readings = get_bot('black', 'circle')

    init_bots(hunter_bot, prey_bot, trail, sensor_readings)

    def visualize(hunter_pos, target_pos, sensor_measurement):
        # More Visualization
        hunter_bot.setheading(target_bot.heading * 180 / math.pi)
        hunter_bot.goto(hunter_pos[0] * size_multiplier, hunter_pos[1] * size_multiplier - 200)
        hunter_bot.stamp()
        prey_bot.setheading(target_bot.heading * 180 / math.pi)
        prey_bot.goto(target_bot.x * size_multiplier, target_bot.y * size_multiplier - 200)
        prey_bot.stamp()
        trail.setheading(target_bot.heading * 180 / math.pi)
        trail.goto(target_pos[0] * size_multiplier, target_pos[1] * size_multiplier - 200)
        trail.stamp()
        sensor_readings.setheading(target_bot.heading * 180 / math.pi)
        sensor_readings.goto(sensor_measurement[0] * size_multiplier, sensor_measurement[1] * size_multiplier - 200)
        sensor_readings.stamp()

        # End of Visualization

    return visualize


def init_window(color, size):
    window = turtle.Screen()
    window.bgcolor(color)


def get_bot(green, shape):
    bot = turtle.Turtle()
    config_bot(green, bot, shape)
    return bot


def init_bots(*bots):
    for bot in bots:
        bot.penup()


def config_bot(color, prey_bot, shape):
    prey_bot.shape(shape)
    prey_bot.color(color)
    prey_bot.resizemode('user')
    prey_bot.shapesize(0.1, 0.1, 0.1)
    return prey_bot


#########################
#  basic knn utilities  #
#########################

def angle_trunc(a):
    """This maps all angles to a domain of [-pi, pi]"""
    while a < 0.0:
        a += math.pi * 2
    return ((a + math.pi) % (math.pi * 2)) - math.pi


def distance_between(point1, point2):
    """Computes distance between point1 and point2. Points are (x, y) pairs."""
    x1, y1 = point1
    x2, y2 = point2
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)


def get_heading(hunter_position, target_position):
    """Returns the angle, in radians, between the target and hunter positions"""
    hunter_x, hunter_y = hunter_position
    target_x, target_y = target_position
    heading = math.atan2(target_y - hunter_y, target_x - hunter_x)
    heading = angle_trunc(heading)
    return heading


def point_displacement(p1, p2):
    p_n_euclidean = lambda x, y: weighted_n_euclidean(x, y, w=[1] * len(x))
    return p_n_euclidean(p1, p2)


def path_displacement(path1, path2):
    return sum(abs(point_displacement(p1i, p2i)) for p1i, p2i in itertools.izip_longest(path1, path2))


def zero_path(path):
    dx, dy = path[0]
    return [(x - dx, y - dy) for x, y in path]


def get_deltas(p1, p2):
    deltas = [(c2 - c1) for c1, c2 in itertools.izip_longest(p1, p2)]
    return deltas


def closest_path(path, paths):
    return min(paths, key=lambda p: path_displacement(path, p))


def r2p(a, b):
    r = math.sqrt(a ** 2 + b ** 2)
    theta = math.atan2(b, a)
    return r, theta


def p2r(r, theta):
    a = r * math.cos(theta)
    b = r * math.sin(theta)
    return a, b


def compensate(path):
    _, theta_prime = r2p(*path[1])
    polar_path = map(lambda p: r2p(*p), path)
    corrected_path = map(lambda p: (p[0], p[1] - theta_prime), polar_path)
    rect_path = map(lambda p: p2r(*p), corrected_path)
    return rect_path


def closest_case(case, cases):
    k = closest_path(case, cases.keys()) if cases else None
    return k, cases[k]


def weighted_n_euclidean(v1, v2, w=None):
    return math.sqrt(sum(wi * ((v2i - v1i) ** 2) for wi, v2i, v1i in itertools.izip_longest(*[w, v2, v1])))


#################
# knn framework #
#################


class ApproachNotFoundException(Exception):
    pass


def get_case(state):
    return state.case


def match_case(approach_options, case, state):
    """

    :param approach_options:
    :param case:
    :param state:
    :return:
    """
    approach = approach_options(case, state)
    if approach:
        return approach

    raise ApproachNotFoundException


def retrieve(approach_getter, state):
    """


    :param approach_getter:
    :param state:
    :return: approach -- should be a function partialed or configured to the current case/state
    """

    case = get_case(state)
    approach = match_case(approach_getter, case, state)
    return approach


def modify_approach(modifier, approach, case, state):
    return modifier(approach, case, state)


def get_approach(r_data):
    return r_data


def adapt(modifier, r_data, state):
    case = get_case(state)
    approach = get_approach(r_data)
    new_approach = modify_approach(modifier, approach, case, state)
    return new_approach


def get_approach_from_adapted_data(a_data):
    return a_data


def evaluate(evaluator, a_data, state):
    case = get_case(state)
    res = evaluator(case, a_data, state)
    return res


def get_storable(packager, e_data, case, state):
    return packager(e_data, case, state)


def next_state(state_advancer, to_store, state):
    return state_advancer(to_store, state)


def store(storable_packager, state_advancer, e_data, state):
    """

    :param storable_packager:  bundles evaluated data and case data into state
    :param state_advancer: gets next state from storable and state
    :param e_data: evaluated answer
    :param state: current state
    :return: state t+1
    """
    case = get_case(state)
    to_store = get_storable(storable_packager, e_data, case, state)
    new_state = next_state(state_advancer, to_store, state)
    return new_state


def knn(approach_getter, modifier, storable_packager, state_advancer, evaluator, state):
    """Main entry point

    :param approach_getter:
    :param modifier:
    :param state:
    :return:
    """
    r_data = retrieve(approach_getter, state)
    a_data = adapt(modifier, r_data, state)
    e_data = evaluate(evaluator, a_data, state)
    new_state = store(storable_packager, state_advancer, e_data, state)

    return new_state


#########################################
# knn configuration for hunter robot    #
# --- I call him rob :)                 #
#########################################


class RobotState(object):
    __slots__ = ['case', 'cases', 'previous_case', 'initial_point']

    def __init__(self, case=None, cases=None, previous_case=None, initial_point=None):
        self.previous_case = previous_case
        self.cases = cases
        self.case = case
        self.initial_point = initial_point


def get_initial_point(state):
    return state.initial_point


def zeroed_case(case):
    z_path = zero_path(case)
    c_path = compensate(z_path)
    return c_path


def robot(case, state):
    cases = get_cases(state)
    z_case = zeroed_case(case)
    case_data = closest_case(z_case, cases)
    return (case,) + case_data


def unpack_approach_data(approach_data):
    return approach_data


def next_point_from_deltas(point, displacement_vector):
    res = [p + dx for p, dx in itertools.izip_longest(point, displacement_vector)]
    return res


def unzero(n_path, case):
    z_case = zero_path(case)
    _, theta_prime = r2p(*z_case[1])
    p_path = [r2p(a, b) for a, b in n_path]
    untheta_path = [p2r(r, theta_prime + theta) for r, theta in p_path]
    dx, dy = case[0]
    u_path = [(x + dx, y + dy) for x, y in untheta_path]
    return u_path


def unzero_case(n_path, case):
    u_path = unzero(n_path, case)
    return u_path


def robot_approach_modifier(approach_data,
                            *unused):  # knn framework allows for extra arguments which are supplied but not used
    case, _closest_case, next_point = unpack_approach_data(approach_data)
    c_case = zeroed_case(case)
    next_point_deltas = get_deltas(_closest_case[-1], next_point)
    n_point = next_point_from_deltas(c_case[-1], next_point_deltas)
    n_path = tuple(c_case) + (n_point,)
    unzeroed_case = unzero_case(n_path, case)

    return lambda *args, **kwargs: unzeroed_case[-1]


def robot_evaluator(case, a_data, state):
    return a_data()


def package_case_data(case, z_case, e_data):
    return dict(
        case=tuple(map(tuple, case)),
        z_case=tuple(map(tuple, z_case)),
        data=tuple(e_data)
    )


def robot_state_advancer(storable, state):
    return RobotState(
        case=state.case,
        cases=get_cases(state),
        previous_case=storable,
        initial_point=get_initial_point(state)
    )


def robot_packager(e_data, case, state):
    z_case = zeroed_case(case)
    previous_case = package_case_data(case, z_case, e_data)
    return previous_case


def robot_knn_actions():
    return partial(knn, robot, robot_approach_modifier, robot_packager, robot_state_advancer, robot_evaluator)


def get_cases(state):
    return state.cases


def get_last_guess(robot_state):
    return robot_state.previous_case['data']


def update_robot_state(measurement, robot_state, error_threshold):
    previous_guess = get_last_guess(robot_state)
    error = distance_between(measurement, previous_guess)

    if error > error_threshold:
        new_cases = get_cases(robot_state)
    else:
        zeroed_measurement = get_zeroed_measurement(measurement, robot_state)
        previous_z_case = get_previous_z_case(robot_state)
        cases = get_cases(robot_state)
        new_cases = {tuple(k): v for k, v in itertools.chain([(previous_z_case, zeroed_measurement)], cases.items())}

    updated_state = RobotState(
        case=robot_state.case,
        cases=new_cases,
        previous_case=robot_state.previous_case,
        initial_point=robot_state.initial_point
    )

    return updated_state


def get_previous_z_case(robot_state):
    return robot_state.previous_case['z_case']


def get_previous_case(robot_state):
    return robot_state.previous_case['case']


def get_zeroed_measurement(measurement, robot_state):
    case = get_previous_case(robot_state)
    path = case + (measurement,)
    zeroed_measurement = tuple(zeroed_case(path))[-1]
    return zeroed_measurement


def get_current_robot_state(measurement, state):
    new_case = state.case[1:] + (measurement,)

    return RobotState(
        case=new_case,
        cases=state.cases,
        previous_case=state.previous_case,
        initial_point=state.initial_point
    )


def robot_normalize(path):
    normalized = compensate(path)
    return normalized


def get_initial_robot_state(OTHER, measurement):
    initial_point = OTHER[0]
    first_case = OTHER + (measurement,)
    z_path = zero_path(first_case)
    stored_case = robot_normalize(z_path)
    corrected_path, corrected_measurement = tuple(stored_case[:-1]), stored_case[-1]

    state = RobotState(
        case=first_case[1:],
        cases={corrected_path: corrected_measurement},
        previous_case=None,
        initial_point=initial_point,
    )

    return state


def config_estimate_next_pos(data_points, error_threshold):
    knn_action = robot_knn_actions()

    def _estimate_next_pos(measurement, OTHER=None):
        """Estimate the next (x, y) position of the wandering Traxbot
        based on noisy (x, y) measurements."""

        online = lambda other: isinstance(other, RobotState)
        initialize = lambda other: isinstance(other, tuple) and len(other) == data_points
        options = {
            online: partial(update, knn_action, error_threshold),
            initialize: begin
        }

        res = (
            reduce(lambda l, x: l + [x[1](OTHER, measurement)] if (not l and x[0](OTHER)) else l, options.items(), [])
         or [learn(OTHER, measurement)])[0]

        return res

    return _estimate_next_pos


def update(knn_action, error_threshold, OTHER, measurement):
    updated_state = get_updated_state(knn_action, error_threshold, OTHER, measurement)
    res = get_next_posn_guess(updated_state), updated_state
    return res


def begin(OTHER, measurement):
    state = get_initial_robot_state(OTHER, measurement)
    res = (0, 0), state
    return res


def learn(OTHER, measurement):
    if OTHER is None:
        OTHER = tuple()
    res = (0, 0), OTHER + (measurement,)
    return res


def get_updated_state(knn_action, error_threshold, OTHER, measurement):
    state = OTHER
    cur_state = get_current_robot_state(measurement, state)
    robot_state = knn_action(cur_state)
    updated_state = update_robot_state(measurement, robot_state, error_threshold)
    return updated_state


def get_next_posn_guess(robot_state):
    return robot_state.previous_case['data']


def config_next_move(data_points, tolerance=0.2):
    estimate_next_pos = config_estimate_next_pos(data_points, tolerance)

    def next_move(hunter_position, hunter_heading, target_measurement, max_distance, OTHER=None):
        next_pos, next_other = estimate_next_pos(target_measurement, OTHER)

        if not isinstance(next_other, RobotState):
            return 0, 0, next_other

        move, turn = turn_towards(next_pos, hunter_position, hunter_heading)
        return turn, move, next_other

    return next_move


#############
# robot API #
#############

def get_max_turning(turning_radius, heading):
    _2_rad = math.pi * 2
    return (heading + turning_radius) % _2_rad, (heading - turning_radius) % _2_rad


def get_desired_angle(coordinates, position):
    dx, dy = dxdy(position, coordinates)

    res = math.atan2(dy, dx)
    return res


def dxdy(p1, p2):
    x1, y1 = p1
    x2, y2 = p2
    dx = x2 - x1
    dy = y2 - y1
    return dx, dy


def get_turn(coordinates, position, heading):
    desired_angle = get_desired_angle(coordinates, position)

    res = desired_angle - heading
    return res


def turn_towards(coordinates, position, heading):
    turn = get_turn(coordinates, position, heading)
    dist = distance_between(coordinates, position)
    return dist, turn


#######################################
#  Robot class code                   #
#  credit -- sebastian thrun, Udacity #
#######################################

# helper function to map all angles onto [-pi, pi]

class Robot:
    def __init__(self, x=0.0, y=0.0, heading=0.0, turning=2 * math.pi / 10, distance=1.0):
        """This function is called when you create a new robot. It sets some of
        the attributes of the robot, either to their default values or to the values
        specified when it is created."""
        self.x = x
        self.y = y
        self.heading = heading
        self.turning = turning  # only applies to target robots who constantly move in a circle
        self.distance = distance  # only applies to target bot, who always moves at same speed.
        self.turning_noise = 0.0
        self.distance_noise = 0.0
        self.measurement_noise = 0.0

    def set_noise(self, new_t_noise, new_d_noise, new_m_noise):
        """This lets us change the noise parameters, which can be very
        helpful when using particle filters."""
        self.turning_noise = float(new_t_noise)
        self.distance_noise = float(new_d_noise)
        self.measurement_noise = float(new_m_noise)

    def move(self, turning, distance, tolerance=0.001, max_turning_angle=math.pi):
        """This function turns the robot and then moves it forward."""
        # apply noise, this doesn't change anything if turning_noise
        # and distance_noise are zero.
        turning = random.gauss(turning, self.turning_noise)
        distance = random.gauss(distance, self.distance_noise)

        # truncate to fit physical limitations
        turning = max(-max_turning_angle, turning)
        turning = min(max_turning_angle, turning)
        distance = max(0.0, distance)

        # Execute motion
        self.heading += turning
        self.heading = angle_trunc(self.heading)
        self.x += distance * math.cos(self.heading)
        self.y += distance * math.sin(self.heading)

    def move_in_circle(self):
        """This function is used to advance the runaway target bot."""
        self.move(self.turning * random.random() * random.choice([1] * 10 + [-1]),
                  self.distance * random.random() * random.choice([1] * 10 + [-1]))

    def sense(self):
        """This function represents the robot sensing its location. When
        measurements are noisy, this will return a value that is close to,
        but not necessarily equal to, the robot's (x, y) position."""
        return (random.gauss(self.x, self.measurement_noise),
                random.gauss(self.y, self.measurement_noise))

    def __repr__(self):
        """This allows us to print a robot's position"""
        return '[%.5f, %.5f]' % (self.x, self.y)


def main():
    test_target = Robot(2.1, 4.3, 0.5, 2 * math.pi / 34.0, 1.5)
    measurement_noise = 0.05 * test_target.distance
    test_target.set_noise(0.0, 0.0, measurement_noise)
    hunter_bot = Robot()
    demo(hunter_bot, test_target, config_next_move(data_points=2, tolerance=.18), OTHER=None, visualization=True)


if __name__ == '__main__':
    main()
