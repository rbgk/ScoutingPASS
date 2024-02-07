var requiredFields = ["e", "m", "l", "r", "s"];
var config_data = {
  dataFormat: "tsv",
  title: "Scouting PASS 2024",
  page_title: "Crescendo",
  checkboxAs: "10",
  prematch: [
    {
      name: "Scouter Initials",
      code: "s",
      type: "scouter",
      size: 5,
      maxSize: 5,
      required: "true",
    },
    {
      name: "Event",
      code: "e",
      type: "event",
      defaultValue: "2023tnkn",
      required: "true",
    },
    {
      name: "Match Level",
      code: "l",
      type: "level",
      choices: {
        qm: "Quals<br>",
        sf: "Semifinals<br>",
        f: "Finals",
      },
      defaultValue: "qm",
      required: "true",
    },
    {
      name: "Match #",
      code: "m",
      type: "match",
      min: 1,
      max: 150,
      required: "true",
    },
    {
      name: "Robot",
      code: "r",
      type: "robot",
      choices: {
        r1: "Red-1",
        b1: "Blue-1<br>",
        r2: "Red-2",
        b2: "Blue-2<br>",
        r3: "Red-3",
        b3: "Blue-3",
      },
      required: "true",
    },
    { name: "Team #", code: "t", type: "team", min: 1, max: 99999 },
    {
      name: "Auto Start Position",
      code: "as",
      type: "clickable_image",
      filename: "2024/field_image.png",
      clickRestriction: "one",
      allowableResponses: "1 12 13 24 25 36 37 48 49 60 61 72",
      shape: "circle 15 black red true",
    },
    { name: "Autonomous", code: "a-div", title: "Autonomous", type: "divider" },
    { name: "Leave Starting Zone", code: "al", type: "bool" },
    { name: "Auto Amp Scores", code: "aas", type: "counter" },
    {
      name: "Auto Scoring Locations",
      code: "asg",
      type: "clickable_image",
      filename: "2024/field_image.png",
      showFlip: "false",
      showUndo: "true",
      dimensions: "24 12",
      shape: "circle 12 black red true",
    },
    {
      name: "Auto Pickup Locations",
      code: "aml",
      type: "clickable_image",
      filename: "2024/field_image.png",
      showFlip: "false",
      showUndo: "false",
      dimensions: "3 5",
      shape: "circle 16 black orange true",
      allowableResponses: "1 4 7 2 5 8 11 14 3 6 9",
      clickRestriction: "onePerBox",
      toggleClick: "true",
    },
    { name: "Teleop", code: "t-div", title: "Teleoperated", type: "divider" },
    {
      name: "Cycle Timer",
      code: "tct",
      type: "cycle",
      showUndo: "false",
      showCycle: "false",
    },
    {
      name: "Teleop Scoring Locations",
      code: "tsg",
      type: "clickable_image",
      filename: "2024/field_image.png",
      showFlip: "false",
      showUndo: "true",
      dimensions: "24 12",
      shape: "circle 12 black red true",
      cycleTimer: "tct",
      undoCounter: "tas",
    },
    {
      name: "Teleop Missing Locations",
      code: "tsm",
      type: "clickable_image",
      filename: "2024/field_image.png",
      showFlip: "false",
      showUndo: "true",
      dimensions: "24 12",
      shape: "circle 12 black lightpink true",
    },
    {
      name: "Teleop Amp Scores",
      code: "tas",
      type: "counter",
      cycleTimer: "tct",
      valueInput: "a",
      valueAttribute: "tsg",
    },
    { name: "Times Amplified", code: "tta", type: "counter" },
    { name: "Pickup From Floor", code: "tpf", type: "bool" },
    { name: "Pickup From Source", code: "tps", type: "bool" },
    { name: "Endgame", code: "e-div", title: "Endgame", type: "divider" },
    { name: "Stage Timer", code: "dt", type: "timer" },
    {
      name: "Final Status",
      code: "fs",
      type: "radio",
      choices: {
        p: "Parked<br>",
        o: "Onstage<br>",
        s: "Onstage (Spotlit)<br>",
        x: "Not attempted",
      },
      defaultValue: "x",
    },
    { name: "Note in Trap", code: "nit", type: "bool" },
    { name: "Postmatch", code: "p-div", title: "Post Match", type: "divider" },

    {
      name: "Played Defense",
      code: "dr",
      type: "bool",
    },
    { name: "Died/Immobilized", code: "die", type: "bool" },
    { name: "Tippy<br>(almost tipped over)", code: "tip", type: "bool" },
    { name: "Dropped Notes (>2)", code: "dn", type: "bool" },
    { name: "Yellow Card", code: "pyc", title: "Yellow Card", type: "bool" },
    { name: "Red Card", code: "prc", title: "Red Card", type: "bool" },
    {
      name: "Egregiously Bad Event Occurred (put info in comments)",
      code: "peb",
      title: "Egregiously Bad",
      type: "bool",
    },
    { name: "Comments", code: "co", type: "text", size: 15, maxSize: 255 },
  ],
};
