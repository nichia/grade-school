//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.school = {};
  }

  roster() {
    const schoolRoster = {};
    for (let key in this.school) {
      schoolRoster[key] = [...this.school[key].sort()];
    }
    return schoolRoster;
  }

  add(name, level) {
    if (level in this.school) {
      this.school[level].push(name);
    } else {
      this.school[level] = [name];
    }
  }

  grade(level) {
    if (level in this.school) {
      return [...this.school[level].sort()];
    } else {
      return [];
    }
  }
}
