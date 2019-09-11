import { imagePath, iconPath } from './constants';

export const getImage = (imageName, extension = '.jpg') => {
    return './' + imagePath + imageName + extension;
};

export const getIcon = (iconName, extension = '.svg') => {
    return './' + iconPath + iconName + extension;
};
