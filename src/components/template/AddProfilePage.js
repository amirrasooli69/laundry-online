"use client";
import CustomDatePicker from "@/module/CustomDatePicker";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import styles from "@/template/AddProfilePage.module.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "@/module/Loader";
import { useRouter } from "next/navigation";

function AddProfilePage({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  useEffect(() => {
    if (data) setProfileData(data);
  }, []);

  const submitHandler = async () => {
    // console.log(profileData);
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-type": "application/json" },
    });
    
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
  };

  const editHandler = async ()=>{
    setLoading(true);
    const res = await fetch('/api/profile',{
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers:{"Content-Type": "application/json"}
    })
    const data =await res.json();
    setLoading(false);
    if(data.error){
      toast.error(data.error)
    } else {
      toast.success(data.message)
      router.refresh();
    }
  }
  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={false}
      />

      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={true}
      />

      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={false}
      />

      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={false}
      />

      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={false}
      />

      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={false}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />

      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
        // calendarPosition="bottom-right"
      />
      {loading ? (
        <Loader />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
      <Toaster />

    </div>
  );
}

export default AddProfilePage;
