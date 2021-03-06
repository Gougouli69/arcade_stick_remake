export const CONFIG = {
    display_update_ms: 100,
    joystick_mode: "UPDATE", // send joystick status every update_ms milliseconds
    //joystick_mode: "EVENT", // send joystick event when it move
    joystick_update_ms: 100,
    button_repeat_limit: 100,
    button_keyrelease_event: true,
    bindings: {
      green: "j",
      blue: "i",
      yellow: "k",
      red: "l",
      start: "p",
      select: "m",
      stick_up: "z",
      stick_down: "s",
      stick_left: "q",
      stick_right: "d"
    }
}