import { useCallback, useEffect, useState } from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import { apiClient } from 'src/utils/apiClient';

function App() {
  const windowWidth = Number(window.innerWidth);
  const windowHeight = Number(window.innerHeight);
  console.log(windowWidth); /*  */
  //プレイヤーと銃の位置をstateで管理
  const [newPlayerPosition, setNewPlayerPosition] = useState<number[][]>([]);
  const [newGunPosition, setNewGunPosition] = useState<number[][]>([]);
  //apiを叩いてプレイヤーと銃の位置を取得stateにセット
  const getPosition = useCallback(async () => {
    const new_playerPosition = await apiClient.rooms.playerPosition.$get();
    const new_gunPosition = await apiClient.rooms.gunPosition.$get();
    console.log(new_playerPosition);
    console.log(new_gunPosition);
    setNewPlayerPosition(new_playerPosition);
    setNewGunPosition(new_gunPosition);
  }, []);
  //APiを叩いて銃を撃つ
  const gunShot = useCallback(async () => {
    await apiClient.rooms.gunPosition.$post(); // Use 'post' method
    const new_gunPosition = await apiClient.rooms.gunPosition.$get();
    setNewGunPosition(new_gunPosition);
  }, []);

  //apiを叩く処理を100msごとに実行
  useEffect(() => {
    const cancelId = setInterval(getPosition, 100);
    return () => {
      clearInterval(cancelId);
    };
  }, [getPosition]);
  //mapで展開してひとつずつ描画
  return (
    <Stage width={windowWidth} height={windowHeight} onClick={gunShot}>
      <Layer>
        <Rect
          stroke={'black'}
          strokeWidth={1}
          x={0}
          y={0}
          width={windowWidth}
          height={windowHeight}
        />
        {newPlayerPosition.map((player, index) => (
          <Rect key={index} x={player[0]} y={player[1]} width={50} height={50} fill="red" />
        ))}
        {newGunPosition.map((gun, index) => (
          <Rect key={index} x={gun[0]} y={gun[1]} width={50} height={50} fill="green" />
        ))}
      </Layer>
    </Stage>
  );
}

export default App;