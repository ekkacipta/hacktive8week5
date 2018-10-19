function highestScore(students) {
	var tmp = [];
	var hasil = {};
	for (var i = 0; i < students.length; i++) {
		var isfind = false;
		for (var j = 0; j < tmp.length; j++) {
			if (students[i].class === tmp[j]) {
				isfind = true;
			}
		}
		if (isfind === false) {
			tmp.push(students[i].class);
		}
	}

	for (var k = 0; k < tmp.length; k++) {
		var hasilscore = [];
		var obj = {};
		for (var l = 0; l < students.length; l++) {
			if (students[l].class === tmp[k]) {
				hasilscore.push(students[l]);
			}
		}

		var pembanding = 0;
		for (var m = 0; m < hasilscore.length; m++) {
			if (pembanding < hasilscore[m].score) {
				hasil[hasilscore[m].class] = obj;
				pembanding = hasilscore[m].score;
				obj.name = hasilscore[m].name;
				obj.score = hasilscore[m].score;
			}
		}
    }
    return hasil
}


  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    },
  ]));
  
//   {
//     foxes: { name: 'Dimitri', score: 90 },
//     wolves: { name: 'Alexei', score: 85 }
//   }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}