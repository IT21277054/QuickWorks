import React, { useCallback, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";

export default function BottomModel() {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["50%"];

  return (
    <View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={()=>setIsOpen(false)}
      >
        <BottomSheetView>
          <Text>Hello</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
