// interface Collection {
//   get length(): number;
//   compare(leftIdx: number, rightIdx: number): boolean;
//   swap(leftIdx: number, rightIdx: number): void;
// }

// 추상클래스는 인스턴스 생성일 불가하다. 부모객체로 사용되며 상속시 해당 속성 및 메소드를 가지고 있을 것을 의미.
export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIdx: number, rightIdx: number): boolean;
  abstract swap(leftIdx: number, rightIdx: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - (i + 1); j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
