export class Matrix {
  constructor(matrix) {
    this.matrix = matrix.split('\n');
  }

  constructRows(matrix) {
    return matrix.map((el, index, arr) => arr[index].split(' '));
  }

  get rows() {
    return this.constructRows(this.matrix);
  }

  constructColumns(rows) {
    return rows[0].map((v, i) => rows.map((row) => row[i]));
  }

  get columns() {
    return this.constructColumns(this.rows);
  }
}

class Polybius extends Matrix {
  constructor(string) {
    super('A B C D E\nF G H I K\nL M N O P\nQ R S T U\nV W X Y Z');
    this.string = string.split('');
  }
  encrypt() {
    let crypt = '';
    this.string.map((letter) => {
      // find row index
      this.rows.map((v, i) => {
        if (v.includes(letter)) {
          crypt += i + 1;
          //find column index
          this.columns.map((v, i) => {
            if (v.includes(letter)) {
              crypt += i + 1;
            }
          });
        }
        crypt += ' ';
      });
    });
    return crypt;
  }
}

const test = new Polybius('MAHDI');
console.log(test.encrypt()); //32 11 23 14 24