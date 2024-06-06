import React, { useCallback } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { selectContentData } from "../../redux/selectors";
import { useCustomSelector, useCustomDispatch } from "../../hooks/store";
import { fetchDeleteAvatar } from "../../redux/slices/authSlice";
import { fetchUpdateContent } from "../../redux/slices/contentSlice";
import Avatar from "../../assets/png/avatar.png";
import s from "./UploadWidget.module.scss";



export const UploadWidget = ({ ...props }) => {
  const dispatch = useCustomDispatch();
  const contentState = useCustomSelector(selectContentData);
  const cloudinaryRef = React.useRef();
  const widgetRef = React.useRef();
  const [avatar, setAvatar] = React.useState(null);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dnyxxxt88",
    },
  });

  const upload = useCallback(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dnyxxxt88",
        uploadPreset: "od0cmi2t",
        sources: [
          "local",
          "camera",
          "google_drive",
          "url"
        ],
      },
      function (error, result) {
        try {
            if (result.event === "success" && contentState.isLoading === 'loaded') {
              console.log(result.info);
              const photoId = result.info.public_id;
              const photoUrl = result.info.secure_url;
              const newAvatar = {id:contentState.data.id, photo_id: photoId, photo_url: photoUrl};
              setAvatar(photoId);
              dispatch(fetchUpdateContent({ ...newAvatar }));
              setTimeout(() => {
                  dispatch(fetchDeleteAvatar(avatar))
              }, 300)
          }
        } catch {
          console.log(error);
        }
      }
    )
    widgetRef.current.open()
  }, [contentState.isLoading])

  React.useEffect(() => {
    if (!avatar && contentState.isLoading === 'loaded') {
        return setAvatar(contentState.data.photo_id);
    } 
  }, [contentState.isLoading]);

  const myImage = cld.image(avatar ? avatar : contentState.data?.content?.main_photo_id).format('auto').quality('auto');

  return (
    <>
      <div className={s.photo__wrap}>
        {
          myImage.publicID ?
            <AdvancedImage
              className={s.photo}
              onClick={() => upload()}
              cldImg={myImage}
            />
            :
            <img className={s.notPhoto} src={Avatar} alt="avatar" onClick={() => upload()} />
        }
      </div>
    </>
  )
}