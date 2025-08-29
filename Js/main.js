
function checkStudent(math, physics, programming, arabic) {
    let grades = [math, physics, programming, arabic];
  
    let passed = grades.filter(mark => mark >= 60).length;
    
    let failed = grades.filter(mark => mark < 60);
  
    if (passed === 4) {
      return "الطالب ناجح (بدون مساعدة)";
    } 
    else if (passed === 3 && failed.length === 1 && failed[0] === 59) {
      return "الطالب ناجح (مساعدة بعلامة)";
    } 
    else if (passed === 3 && failed.length === 1 && failed[0] === 58) {
        return "الطالب ناجح (مساعدة بعلامتين)";
      } 

    else if (passed === 2 && failed.length === 2 && failed.every(mark => mark === 59)) {
      return "الطالب ناجح (مساعدة بعلامتين)";
    } 
    else {
      return "الطالب راسب";
    }
  }
  /////////////////////////////////////////////////
  function Days(day, month, year) {
    let y=year * 360;
    let m=month * 30;
    return y + m + day;
  }
  
  function Age(d1, m1, y1, d2, m2, y2) {
    let age1 = Days(d1, m1, y1);
    let age2 = Days(d2, m2, y2);
  
    if (age1 < age2) {
      return " الأول أكبر عمرًا";
    } else if (age1 > age2) {
      return " الثاني أكبر عمرًا";
    } else {
      return "العمر متساوي";
    }
  }
  
  console.log(Age(5, 2, 2000, 6, 2, 2000)); // الأول أكبر

  ///////////////////////////////////////////
 
  console.log(checkStudent(70, 70, 80, 58)); // ناجح (مساعدة بمادة واحدة)
