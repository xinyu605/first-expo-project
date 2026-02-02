import { Stack } from "expo-router";

const TodosLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default TodosLayout;
