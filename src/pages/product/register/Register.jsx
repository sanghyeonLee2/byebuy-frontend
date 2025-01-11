import { useEffect, useState } from 'react';
import { postItem } from '../../../commons/api/item.api';
import useHeaderNavigation from '../../../commons/hooks/useHeaderNavigation';
import { iconMap } from '../../../components/icons/iconMap';
import * as S from './Register.styles';

export const Register = () => {
  useHeaderNavigation({
    left: 'backArrow',
    title: '상품 등록',
    right: 'empty',
  });

  const createItem = async () => {
    try {
      const response = await postItem({ items: [formData] });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    latitude: 0,
    longitude: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createItem();
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files && files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          image: e.target.result,
          latitude: 127.032331,
          longitude: 37.561706,
        }));
      };

      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.InnerWrapper>
        <S.Text>사진</S.Text>
        {formData.image ? (
          <S.ProductImage src={formData.image} alt="product" />
        ) : (
          <S.ImageUploadWrapper type="file" name="image" accept="image/*" onChange={handleChange}>
            <S.ImageUploadIcon src={iconMap.addAPhoto}></S.ImageUploadIcon>
            <S.HiddenInput type="file" name="image" accept="image/*" onChange={handleChange} />
          </S.ImageUploadWrapper>
        )}
        <S.Text>제목</S.Text>
        <S.InputWrapper
          type="text"
          name="title"
          placeholder="상품명을 입력해주세요"
          value={formData.title}
          onChange={handleChange}
        ></S.InputWrapper>
        <S.Text>카테고리</S.Text>
        <S.InputWrapper
          name="category"
          placeholder="카테고리를 선택해주세요"
          value={formData.category}
          onChange={handleChange}
        ></S.InputWrapper>
        <S.Text>설명</S.Text>
        <S.InputWrapper
          name="description"
          placeholder="상품에 대한 설명을 적어주세요"
          value={formData.description}
          onChange={handleChange}
        ></S.InputWrapper>
      </S.InnerWrapper>
      <S.RegisterButton>등록하기</S.RegisterButton>
    </S.Wrapper>
  );
};
