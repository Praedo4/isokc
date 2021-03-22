
const recordings = [
    { start: "1.1", end: "1.15" },
    { start: "1.16", end: "1.31" },
    { start: "1.32", end: "1.40" },
    { start: "1.41", end: "1.46" },
    { start: "2.1", end: "2.2" },
    { start: "2.3", end: "2.4" },
    { start: "2.4", end: "2.11" },
    { start: "2.12", end: "2.15" },
    { start: "2.16", end: "2.17" },
    { start: "2.18", end: "2.22" },
    { start: "2.23", end: "2.31" },
    { start: "2.32", end: "2.38" },
    { start: "2.39", end: "2.41" },
    { start: "2.42", end: "2.47" },
    { start: "2.48", end: "2.55" },
    { start: "2.56", end: "2.60" },
    { start: "2.61", end: "2.66" },
    { start: "2.67", end: "2.70" },
    { start: "3.1", end: "3.3" },
    { start: "3.4", end: "3.9" },
    { start: "3.10", end: "3.13" },
    { start: "3.14", end: "3.18" },
    { start: "3.19", end: "3.21" },
    { start: "3.22", end: "3.25" },
    { start: "3.26", end: "3.26" },
    { start: "3.27", end: "3.27" },
    { start: "3.28", end: "3.29" },
    { start: "3.30", end: "3.33" },
    { start: "3.34", end: "3.39" },
    { start: "3.40", end: "3.41" },
    { start: "4.1", end: "4.4" },
    { start: "4.5", end: "4.7" },
    { start: "4.8", end: "4.11" },
    { start: "4.12", end: "4.14" },
    { start: "4.15", end: "4.16" },
    { start: "4.17", end: "4.18" },
    { start: "4.19", end: "4.26" },
    { start: "4.27", end: "4.31" },
    { start: "4.32", end: "4.34" },
    { start: "4.35", end: "4.40" },
    { start: "4.41", end: "4.42" },
    { start: "5.1", end: "5.6" },
    { start: "5.7", end: "5.14" },
    { start: "5.15", end: "5.15" },
    { start: "5.16", end: "5.17" },
    { start: "5.15", end: "5.26" },
    { start: "6.1", end: "6.5" },
    { start: "6.6", end: "6.6" },
    { start: "6.7", end: "6.10" },
    { start: "6.11", end: "6.19" },
    { start: "6.20", end: "6.24" },
    { start: "6.25", end: "6.29" },
    { start: "6.30", end: "6.31" },
    { start: "6.32", end: "6.35" },
    { start: "6.36", end: "6.36" },
    { start: "6.37", end: "6.47" },
    { start: "7.1", end: "7.4" },
    { start: "7.5", end: "7.7" },
    { start: "7.8", end: "7.11" },
    { start: "7.12", end: "7.16" },
    { start: "7.17", end: "7.18" },
    { start: "7.19", end: "7.20" },
    { start: "7.21", end: "7.22" },
    { start: "7.23", end: "7.25" },
    { start: "8.1", end: "8.3" },
    { start: "8.4", end: "8.6" },
    { start: "8.7", end: "8.8" },
    { start: "8.9", end: "8.10" },
    { start: "8.11", end: "8.13" },
    { start: "8.14", end: "8.21" },
    { start: "8.22", end: "8.25" },
    { start: "8.26", end: "8.28" },
    { start: "9.1", end: "9.1" },
    { start: "9.2", end: "9.2" },
    { start: "9.3", end: "9.3" },
    { start: "9.4", end: "9.5" },
    { start: "9.6", end: "9.9" },
    { start: "9.10", end: "9.11" },
    { start: "9.11", end: "9.11", filename: "9.11.2.mp3" },
    { start: "9.12", end: "9.14", },
    { start: "9.15", end: "9.15", },
    { start: "9.16", end: "9.16", },
    { start: "9.17", end: "9.17", },
    { start: "9.18", end: "9.20", },
    { start: "9.21", end: "9.22", },
    { start: "9.23", end: "9.26", },
    { start: "9.27", end: "9.29", },
    { start: "9.30", end: "9.31", },
    { start: "9.32", end: "9.33", },
    { start: "10.1", end: "10.2", },
    { start: "10.3", end: "10.5", },
    { start: "10.5", end: "10.5", filename: "10.5.2.mp3" },
    { start: "10.5", end: "10.5", filename: "10.5.3.mp3" },
    { start: "10.5", end: "10.5", filename: "10.5.4.mp3" },
    { start: "10.5", end: "10.5", filename: "10.5.5.mp3" },
    { start: "10.6", end: "10.8", },
    { start: "10.9", end: "10.9", },
    { start: "10.10", end: "10.11", },
    { start: "10.11", end: "10.11", filename: "10.11.2.mp3"  },
    { start: "10.12", end: "10.15", },
    { start: "10.16", end: "10.17", },
    { start: "10.17", end: "10.17", filename: "10.17.2.mp3" },
    { start: "10.18", end: "10.18", },
    { start: "10.19", end: "10.21", },
    { start: "10.22", end: "10.25", },
    { start: "10.25", end: "10.25", filename: "10.25.2.mp3" },
    { start: "10.26", end: "10.29", },
    { start: "10.31", end: "10.32", },
    { start: "10.33", end: "10.33", },
    { start: "10.34", end: "10.36", },
    { start: "10.37", end: "10.37", },
    { start: "10.38", end: "10.39", },
    { start: "11.1", end: "11.4", },
    { start: "11.5", end: "11.12", },
    { start: "11.13", end: "11.14", },
    { start: "11.15", end: "11.24", },
    { start: "11.25", end: "11.30", },
    { start: "11.31", end: "11.36", },
    { start: "11.37", end: "11.43", },
    { start: "11.44", end: "11.48", },
    { start: "11.49", end: "11.50", },
    { start: "11.51", end: "11.53", },
    { start: "11.54", end: "11.54", },
    { start: "11.55", end: "11.55", },
    { start: "12.1", end: "12.4", },
    { start: "12.5", end: "12.8", },
    { start: "12.9", end: "12.9", },
    { start: "12.10", end: "12.12", },
    { start: "12.12", end: "12.12", filename: "12.12.2.mp3"},
    { start: "12.13", end: "12.14", },
    { start: "12.15", end: "12.16", },
    { start: "12.17", end: "12.19", },
    { start: "12.19", end: "12.19", filename: "12.19.2.mp3"},
    { start: "12.20", end: "12.20", },
    { start: "13.1", end: "13.3", },
    { start: "13.4", end: "13.5", },
];

const data = {recordings: recordings}

export default data