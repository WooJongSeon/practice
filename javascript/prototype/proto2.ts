class Proto {
  private priv() {
  }

  publicFunc() {

  }
}

// new Proto().privateFunc // 접근 불가
new Proto().publicFunc() // 접근 가능
