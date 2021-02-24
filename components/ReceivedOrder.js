export const ReceivedOrder = () => {
  // 受注日の入力欄
  const [orderDate, setOrderDate] = useState("");
  const onChangeOrderDate = (event) => setOrderDate(event.target.value);
  //ひげの種類を設定（将来的に追加処理ができるようにstateにしてもよいかも？）
  const buttonNames = ["猫のひげ", "ウサギのひげ"];
  //商品名の設定
  const catNames = ["ミケ", "キジ", "ノビノビ", "ジャンプ", "a", "b", "c"];
  const rabbitNames = ["ネザーランドドワーフ", "ロップイヤー", "d"];
  const itemNames = [catNames, rabbitNames];

  return (
    <div>
      <div className="dateInputDiv">
        <label className="label">受注日入力</label>
        <input
          // placeholder="受注日"
          type="date"
          value={orderDate}
          onChange={onChangeOrderDate}
        />
      </div>
      <div className="orderInputDiv">
        {/* 猫、ウサギのボタン名でループ */}
        {buttonNames.map((buttonName, index) => {
          return (
            <div key={index}>
              <button>{buttonName}</button>
              <ul className="itemContainer">
                {/* 商品名でループ表示 */}
                {itemNames[index].map((item) => {
                  return (
                    <div key={item}>
                      <li className="orderRow">
                        <div className="illst mr-10">Image</div>
                        <p className="wd-100 mr-10">{item}</p>
                        <div>
                          <label>注文数</label>
                          <input type="number" />
                        </div>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
