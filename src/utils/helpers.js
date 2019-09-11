import { imagePath, iconPath } from './constants';

export const getImage = (imageName, extension = '.jpg') => {
    return './' + imagePath + imageName + extension;
};

export const getIcon = (iconName, extension = '.svg') => {
    return './' + iconPath + iconName + extension;
};

export const getHumanReadableTime = (time, now = new Date().toISOString()) => {
    const timeDiff = new Date(time) - new Date(now);
    const days = Math.abs(timeDiff / (1000 * 60 * 60 * 24));

    if (days < 0.05) {
        return 'just now';
    }
    if (days < 1) {
        return Math.floor(days * 24) + ' hours ago';
    }

    if (days < 2) {
        return '1 day ago';
    }
    if (days > 30) {
        return time.split('T')[0];
    }

    return Math.floor(days) + ' days ago';
};
