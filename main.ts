basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.LeftState, OSOYOO_Robot.enLineState.White) && OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.RightState, OSOYOO_Robot.enLineState.White)) {
        OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_Run, 100)
    } else if (OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.LeftState, OSOYOO_Robot.enLineState.White) && OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.RightState, OSOYOO_Robot.enLineState.Black)) {
        OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_Left, 120)
    } else if (OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.LeftState, OSOYOO_Robot.enLineState.Black) && OSOYOO_Robot.Line_Sensor(OSOYOO_Robot.enPos.RightState, OSOYOO_Robot.enLineState.White)) {
        OSOYOO_Robot.CarCtrlSpeed(OSOYOO_Robot.CarState.Car_Right, 120)
    } else {
        OSOYOO_Robot.CarCtrl(OSOYOO_Robot.CarState.Car_Stop)
    }
})
