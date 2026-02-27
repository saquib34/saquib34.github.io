#!/usr/bin/env node

const bold = "\x1b[1m";
const primary = "\x1b[38;5;220m"; // Yellowish
const accent = "\x1b[38;5;177m";  // Purpleish
const reset = "\x1b[0m";
const gray = "\x1b[90m";
const white = "\x1b[37m";

const output = `
  ${bold}${white}Mohammad Saquib Daiyan${reset}
  ${accent}Software Development Engineer @ Aptli AI${reset}

  ${bold}${primary}Portfolio:${reset}  ${white}https://saquib.in${reset}
  ${bold}${primary}GitHub:${reset}     ${white}https://github.com/saquib34${reset}
  ${bold}${primary}LinkedIn:${reset}   ${white}https://linkedin.com/in/saquib34${reset}
  ${bold}${primary}Email:${reset}      ${white}shadmanshahin6@gmail.com${reset}

  ${gray}_________________________________________________${reset}

  ${bold}${white}Expertise:${reset} ${accent}Machine Learning | Virtualization | Web Architecture${reset}
  ${bold}${white}Research:${reset}  ${white}Deepfake Detection using Computer Vision (IEEE)${reset}

  ${gray}Run: ${reset}${bold}${primary}npx saquib${reset} ${gray}to see this card anywhere!${reset}
`;

console.log(output);
