// import React, { useCallback } from "react";
// //////////////////////////Cloudinary//////////////////////////////
// import { AdvancedImage } from "@cloudinary/react";
// import { Cloudinary } from "@cloudinary/url-gen";
// import { selectAuthData, selectContentData } from "../../redux/selectors";
// import { useCustomSelector, useCustomDispatch } from "../../hooks/store";
// import { fetchDeleteAvatar, fetchUpdateInfo } from "../../redux/slices/authSlice";
// import { fetchGetContetn, fetchUpdateContent } from "../../redux/slices/contentSlice";
// import Avatar from "../../assets/png/avatar.png";
// import s from "./UploadWidget.module.scss";



// export const UploadWidget = ({ ...props }) => {
//   const dispatch = useCustomDispatch();
//   const authState = useCustomSelector(selectAuthData);
//   const contentState = useCustomSelector(selectContentData);
//   const cloudinaryRef = React.useRef();
//   const widgetRef = React.useRef();
//   const [avatar, setAvatar] = React.useState("");

//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: "dnyxxxt88",
//     },
//   });

//   const upload = useCallback(() => {
//     cloudinaryRef.current = window.cloudinary;
//     widgetRef.current = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: "dnyxxxt88",
//         uploadPreset: "od0cmi2t",
//         sources: [
//           "local",
//           "camera",
//           "google_drive",
//           "url"
//         ],
//       },
//       function (error, result) {
//         try {
//           const photoId = result.info.public_id;
//           console.log(result);
//           if (photoId) {
//             const data = { id: authState?.data?.user?.id, photoId };
//             const contentData = { _id: contentState.data?.content?._id, main_photo_id: photoId }
//             setAvatar(photoId);
//             dispatch(fetchDeleteAvatar(authState.data?.user.photoId))
//             setTimeout(() => {
//               dispatch(fetchUpdateInfo({ ...data }));
//               dispatch(fetchUpdateContent({ ...contentData }));
//             }, 500)
//           }
//         } catch (e) {
//           console.log(error);
//         }
//       }
//     )
//     widgetRef.current.open()
//   }, [dispatch, authState?.data?.user?.id, authState.data?.user.photoId, contentState.data?.content?._id])

//   React.useEffect(() => {
//     if (!avatar && authState.isLoading === 'loaded') {
//       setAvatar(authState.data?.user.photoId);
//     }
//     // dispatch(fetchGetContetn())
//   }, [
//     // dispatch,
//     // authState.data?.user.photoId,
//     // avatar,
//     // authState,
//   ]);

//   const myImage = cld.image(avatar ? avatar : contentState.data?.content?.main_photo_id).format('auto').quality('auto');

//   // if (!avatar && !contentState.data?.content?.main_photo_id) {
//   //   return <img className={s.notPhoto} src={Avatar} alt="avatar" />
//   if (props.requestFrom === 'admin') {
//     return (
//       <>
//         <div className={s.photo__wrap}>
//           {
//             myImage.publicID ?
//               <AdvancedImage
//                 className={s.photo}
//                 onClick={() => upload()}
//                 cldImg={myImage}
//               />
//               :
//               <img className={s.notPhoto} src={Avatar} alt="avatar" onClick={() => upload()} />
//           }
//         </div>
//       </>
//     )
//   }
//   else {
//     return (
//       <>
//         {
//           myImage.publicID ?
//             <AdvancedImage
//               className={s.img}
//               cldImg={myImage}
//             />
//             :
//             <img className={s.notPhoto} src={Avatar} alt="avatar" onClick={() => upload()} />
//         }
//       </>
//     )
//   }
// }