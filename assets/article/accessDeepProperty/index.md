---
title: ネスト深いオブジェクトの値でソートする
date: xx
tags: TypeScript JavaScript
---
オブジェクトが並んだ配列をソートするとする。

どんなオブジェクトが流れてくるかわからないが、指し示されたプロパティでソートしたいときはないだろうか？私はある。(強引)

## やりたいこと

例えばオブジェクトの配列`[obj1,obj2,obj3]`があったとき、  
`obj1.hello.world`の値、`obj2.hello.world`の値、`obj3.hello.world`の値を比較して、オブジェクトを並び替える。

これを、比較する値のオブジェクト内の深さやプロパティ名が任意のときにやりたい。
先に使用例を見てもらう。

## 使用例

次のように使える`sortDeepProperty()`をつくる。

```ts
const arr = [
  { hello: { world: 3 } },
  { hello: { world: 1 } },
  { hello: { world: 2 } },
]
sortDeepProperty(arr, ['hello','world'])
console.log(arr)
/*
[
  { hello: { world: 1 } },
  { hello: { world: 2 } },
  { hello: { world: 3 } }
]
*/
```

## 実装

再帰的にオブジェクトのプロパティを指し示す関数`returnDeepProperty()`を作り、これを使って`Array.prototype.sort()`で比較する

```ts

// returnDeepProperty(obj, ['a','b']) の戻り値は obj.a.b の値と同じ
function returnDeepProperty (object: object, propertyPointer: string[]): number {
  if (!(propertyPointer[0] in object)) {
    throw 'the property is undefined'
  }
  if (propertyPointer.length === 1) {
    if(typeof object[ propertyPointer[0] ] === 'number') {
      return object[ propertyPointer[0] ]
    }
    throw 'the property is not number'
  }
  return returnDeepProperty( object[ propertyPointer[0] ], propertyPointer.slice(1,) )
}

function sortDeepProperty (arr: object[], propertyPointer: string[]): void {
  arr.sort( (a,b) => {
    returnDeepProperty(a, propertyPointer) - returnDeepProperty(b, propertyPointer)
  })
  return
}

const arr = [
  { hello: { world: 3 } },
  { hello: { world: 1 } },
  { hello: { world: 2 } },
]
sortDeepProperty(arr, ['hello','world'])
console.log(arr)
/*
[
  { hello: { world: 1 } },
  { hello: { world: 2 } },
  { hello: { world: 3 } }
]
*/
```

## まとめ

ようするにオブジェクト`obj`があったときに、再帰関数を利用して`obj[a][b][c]...`の値を見たかった。  

思いついたコードを書き留めたくなったので書き残しておく。
