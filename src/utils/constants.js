export const iconPath =
    document.location.host.includes('localhost:5000') || document.location.host.includes('surge') ? 'icons/' : '';
export const imagePath =
    document.location.host.includes('localhost:5000') || document.location.host.includes('surge') ? 'images/' : '';
export const databaseUrl = 'https://imgine-db.glitch.me/data';

export const colourMap = {
    atom: '--primary-colour',
    tips: '--quart-colour',
    inbox: '--tertiary-colour',
    message: '--red-colour',
};
