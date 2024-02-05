import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPhotosAction } from "../../actions/photos";

export function Content({ children }) {
  // Сделал, чтобы в контенте сразу подгружались все фотографии потому что, думаю, что грузить каждый раз фотографии для обложки альбома будет слишком затратно
  const dispatch = useDispatch();
  useEffect(() => {
    getPhotosAction(dispatch);
  }, []);
  return <div className="content">{children}</div>;
}
