"use client"; // Bu satır bileşenin sadece tarayıcıda çalışmasını sağlar
import React, { useState } from "react";
import dynamic from "next/dynamic"; // Dinamik import için next/dynamic kullanılır
import { Icon } from "@iconify/react";

// AvatarEditor'u dinamik olarak yükleyip, SSR'yi devre dışı bırakıyoruz
const AvatarEditor = dynamic(() => import("react-avatar-edit"), { ssr: false });

const ProfileAvatar = () => {
  const [preview, setPreview] = useState<string | null>(null); // Avatar önizlemesi
  const [isOpen, setIsOpen] = useState(false); // Modal açık/kapalı durumu

  const onClose = () => {
    setPreview(null); // Avatar düzenlemeyi iptal edersek
  };

  const onCrop = (preview: string) => {
    setPreview(preview); // Kesilen avatarı kaydetme
  };

  const onBeforeFileLoad = (elem: React.ChangeEvent<HTMLInputElement>) => {
    if (elem.target.files && elem.target.files.length > 0) {
      const file = elem.target.files[0];
      if (file.size > 2000000) {
        alert("Dosya boyutu 2MB'den büyük olamaz.");
        elem.target.value = ""; // Büyük dosyayı reddet
      }
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Profil Avatarı */}
      <div className="relative">
        <img
          src={preview || "/default-profile.jpg"} // Varsayılan avatar veya kullanıcı resmi
          alt="Avatar"
          className="w-32 h-32 rounded-full object-cover"
        />
        <button
          onClick={() => setIsOpen(true)}
          className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
        >
          <Icon icon="akar-icons:edit" />
        </button>
      </div>

      {/* Avatar düzenleme modalı */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Avatar Düzenle</h2>
            <AvatarEditor
              width={300}
              height={300}
              onCrop={onCrop}
              onClose={onClose}
              onBeforeFileLoad={onBeforeFileLoad}
              label="Upload Image"
            />
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Kapat
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
