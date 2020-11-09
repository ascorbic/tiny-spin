const dots = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const out = process.stderr;

exports.spin = function spin(message = "", frames = dots, interval = 80) {
  let frame = 0;
  // Hide cursor
  out.write("\x1b[?25l");
  const timer = setInterval(() => {
    out.write(`${frames[frame]} ${message}`);
    frame = (frame + 1) % frames.length;
    out.cursorTo(0);
  }, interval);

  return function stop() {
    clearInterval(timer);
    out.cursorTo(0);
    // Show cursor
    out.write("\x1b[?25h");
  };
};
