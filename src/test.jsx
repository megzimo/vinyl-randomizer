import React from "react";
import { Button } from 'react-native';
import ScrollPicker from "react-native-wheel-scrollview-picker";

const dataSource = ["1", "2", "3", "4", "5", "6"]
export const Demo = () => {
  const ref = React.useRef();
  const [index, setIndex] = React.useState(0);
  const onValueChange = (data, selectedIndex) => {
    setIndex(selectedIndex);
  };

  const onNext = () => {
    if (index === dataSource.length - 1) return;
    setIndex(index + 1);
    ref.current && ref.current.scrollToTargetIndex(index + 1);
  }
  return (
    <ScrollPicker
      ref={ref}
      dataSource={dataSource}
      selectedIndex={index}
    />
    <Button
      onPress={onNext}
      title="Next one"
    />
  );
};