import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// このコンポーネントが App 全体で使われると、ページ遷移時に scrollTop へ移動する
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // ← スムーズスクロールなし
  }, [pathname]);

  return null;
}
