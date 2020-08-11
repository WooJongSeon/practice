interface SquareConfig {
  color?: string;
  area?: number;
  [propName: string]: any; // 여러개의 프로퍼티를 가질 수 있다.
}
function createSquare(config: SquareConfig): { color: string, area: number } {
  return { color: '', area: 2 }
}

let mySquare = createSquare({ colour: 'adfasd', width: 100 } as SquareConfig);

