import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HookThemeButton from "../chap07/HookThemeButton";
import MyThemeProvider from "../chap07/MyThemeProvider";

test('HookThemeButton Teest', async() => {
  const ev = userEvent.setup();
  //MyThemeProvider付きで、HookThemeButtonをレンダリング
  render(<HookThemeButton />, { wrapper: MyThemeProvider });
  //ボタンをシュミレート
  const btn = screen.getByRole('button');
  ev.click(btn);
  //ボタンキャプションがdarkに変化していることを確認
  await waitFor(()=>expect(btn).toHaveTextContent('dark'));
})