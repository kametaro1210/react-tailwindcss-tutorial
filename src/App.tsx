import { useState } from "react";

function App() {

  const [open, setOpen] = useState(false);


  return (

    // <div className="bg-blue-300 py-5">
    //   <p className="text-xl font-bold text-center text-green-500">
    //     Hello World
    //   </p>
    // </div>

    // <div className="bg-slate-50 min-h-screen text-slate-900">
    //   Hello world
    // </div>

    <div>
      {/* ヘッダー全体の背景色と文字色 */}
      <header className="bg-slate-950 text-white">
        {/*
          flex: ロゴ・PC用ナビ・ボタンを横並びにする
          h-12: このヘッダー行の高さを指定する
          items-center: 行の中で縦方向の位置を中央にする
          justify-between: 子要素を左右に離して配置する
          px-5: 左右に余白を付ける
        */}
        <div className="flex h-12 items-center justify-between px-5">
          {/* font-bold: ロゴの文字を太字にする */}
          <div className="font-bold">Logo</div>

          {/*
            hidden: 小さい画面では非表示にする
            sm:flex: sm以上の画面では横並びで表示する
            gap-4: メニュー項目の間隔を空ける
          */}
          <nav className="hidden gap-4 sm:flex">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </nav>

          {/*
            cursor-pointer: ボタン上でポインター表示にする
            text-xl: ハンバーガー記号を大きくする
            sm:hidden: sm以上の画面ではボタンを隠す
          */}
          <button
            className="cursor-pointer text-xl sm:hidden"
            aria-label="メニューを開閉"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            ≡
          </button>
        </div>

        {/*
          openがtrueのときだけ表示する。横並びのヘッダー行の外にあるため、
          開くとヘッダー行の下に表示される。
          flex: メニューをflexレイアウトにする
          flex-col: 項目を縦に並べる
          items-center: 項目を横方向の中央にそろえる
          gap-2: 項目の間隔を空ける
          pb-4: 下に余白を付ける
          sm:hidden: sm以上の画面では隠す
        */}
        {open && (
          <nav className="flex flex-col items-center gap-2 pb-4 sm:hidden">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
        )}
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110 transition-all duration-500">Feature 1</div>
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110">Feature 2</div>
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110">Feature 3</div>
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110">Feature 4</div>
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110">Feature 5</div>
        <div className="bg-slate-500 hover:bg-slate-700  p-4 rounded-full hover:scale-110">Feature 6</div>
      </div>
    </div>
    




  )
}

export default App
