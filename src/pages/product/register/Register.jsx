import imageCompression from 'browser-image-compression';
import { useReducer, useState } from 'react';
import { postItem } from '../../../commons/api/item.api';
import useHeaderNavigation from '../../../commons/hooks/useHeaderNavigation';
import { iconMap } from '../../../components/icons/iconMap';
import * as S from './Register.styles';

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  category: '',
  image: '',
  latitude: 0,
  longitude: 0,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'UPDATE_IMAGE':
      return {
        ...state,
        image: action.value,
        latitude: 127.032331,
        longitude: 37.561706,
        isMain: true,
        isDisplayed: true,
      };
    case 'RESET':
      return INITIAL_FORM_STATE;
    default:
      return state;
  }
};

export const Register = () => {
  useHeaderNavigation({
    left: 'backArrow',
    title: '상품 등록',
    right: 'empty',
  });

  const [openCategory, setOpenCategory] = useState(false);
  const [formData, dispatch] = useReducer(formReducer, INITIAL_FORM_STATE);
  const [previewImage, setPreviewImage] = useState(null);

  const createItem = async () => {
    try {
      const response = await postItem({ items: [formData] });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const compressImage = async (imageFile) => {
    const options = {
      maxSizeMB: 0.5, // 최대 파일 크기를 0.5MB로 감소
      maxWidthOrHeight: 800, // 최대 너비/높이를 800px로 감소
      useWebWorker: true,
      initialQuality: 0.7, // 초기 품질을 70%로 설정
      fileType: 'image/jpeg', // JPEG 형식으로 강제 변환
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      return compressedFile;
    } catch (error) {
      console.error('이미지 압축 실패:', error);
      return imageFile; // 압축 실패시 원본 반환
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createItem();
      dispatch({ type: 'RESET' }); // 성공 시 폼 초기화
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files && files[0]) {
      const previewURL = URL.createObjectURL(files[0]);
      setPreviewImage(previewURL);
      const compressedFile = await compressImage(files[0]);
      const reader = new FileReader();

      reader.onload = (e) => {
        const binaryString = e.target.result.split(',')[1];
        dispatch({
          type: 'UPDATE_IMAGE',
          value: binaryString,
        });
      };

      reader.readAsDataURL(compressedFile);
    } else {
      dispatch({
        type: 'UPDATE_FIELD',
        field: name,
        value,
      });
    }
  };

  const handleCategorySelect = (category) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: 'category',
      value: category,
    });
    setOpenCategory(false);
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.InnerWrapper>
        <S.Text>사진</S.Text>
        {formData.image ? (
          <S.ProductImage src={previewImage} alt="product" />
        ) : (
          <S.ImageUploadWrapper>
            <S.ImageUploadIcon src={iconMap.addAPhoto}></S.ImageUploadIcon>
            <S.PlaceholderText>사진 추가</S.PlaceholderText>
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
        {!openCategory ? (
          <S.CategoryDefault onClick={() => setOpenCategory(true)}>
            <S.PlaceholderText isSelected={!!formData.category}>
              {formData.category || '카테고리를 선택해주세요'}
            </S.PlaceholderText>
            <S.CategoryArrow src={iconMap.arrowDropDown} />
          </S.CategoryDefault>
        ) : (
          <S.CategoryWrapper>
            <S.CategoryOption onClick={() => setOpenCategory(false)}>
              <S.PlaceholderText isSelected={formData.category}>카테고리를 선택해주세요</S.PlaceholderText>
              <S.CategoryArrow src={iconMap.arrowDropDown} />
            </S.CategoryOption>
            <S.CategoryOption onClick={() => handleCategorySelect('생활용품')}>
              <S.CategoryText>생활 용품</S.CategoryText>
            </S.CategoryOption>
            <S.CategoryOption onClick={() => handleCategorySelect('도서 및 미디어')}>
              <S.CategoryText>도서 및 미디어</S.CategoryText>
            </S.CategoryOption>
            <S.CategoryOption onClick={() => handleCategorySelect('가전제품')}>
              <S.CategoryText>가전 제품</S.CategoryText>
            </S.CategoryOption>
            <S.CategoryOption onClick={() => handleCategorySelect('의류')}>
              <S.CategoryText>의류</S.CategoryText>
            </S.CategoryOption>
            <S.CategoryOption onClick={() => handleCategorySelect('기타')}>
              <S.CategoryText>기타</S.CategoryText>
            </S.CategoryOption>
          </S.CategoryWrapper>
        )}
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
