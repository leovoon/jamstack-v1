  // Bank some good vibe options
  const vibes = [
    "Wash your hands frequently 🖐",
    "Maintain social distancing 👥",
    "Avoid touching eyes, nose and mouth❗",
    "Practice respiratory hygiene 🖐",
    "If you have fever, cough and difficulty breathing, seek medical care early 🏥",
    "Stay at home! 🏠"
  ];

   // choose a random good vibe
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

  // display a good vibe
  document.querySelector(".vibe").append(vibe);
