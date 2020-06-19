const bases = ["C", "D", "E", "F", "G", "A", "B"];
const accidentals = ["", "#", "b"];
const thirds = ["", "m"];
const sevenths = ["", "7", "maj7"];

const chords = [];

bases.forEach((base) => {
  accidentals.forEach((accidental) => {
    thirds.forEach((third) => {
      sevenths.forEach((seventh) => {
        chords.push({
          base,
          accidental,
          third,
          seventh,
          repr: `${base}${accidental}${third}${seventh}`,
        });
      });
    });
  });
});

const sortedChords = chords.sort((a, b) => a.repr.length - b.repr.length);

export default sortedChords;
