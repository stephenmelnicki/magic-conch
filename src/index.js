const responses = [
  "Maybe someday.",
  "Nothing.",
  "Neither.",
  "I don't think so.",
  "No.",
  "Yes.",
  "Try asking again.",
  "[In a very insulting, sarcastic-like tone] No.",
];

export default function (robot) {
  robot.respond(/(.*)\?/i, (msg) => {
    msg.send(msg.random(responses));
  });

  robot.hear(/all hail the magic conch/i, (msg) => {
    msg.send("Woo loo loo loo loo!");
  });
}
