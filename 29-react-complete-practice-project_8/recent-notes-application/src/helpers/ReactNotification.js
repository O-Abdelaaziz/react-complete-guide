import { NotificationManager } from 'react-notifications';

export const NotificationType = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error'
};

const CreateNotification = (type, title, message) => {
    return () => {
        switch (type) {
            case NotificationType.INFO:
                NotificationManager.info(message, title);
                break;
            case NotificationType.SUCCESS:
                NotificationManager.success(title, message);
                break;
            case NotificationType.WARNING:
                NotificationManager.warning(title, message, 3000);
                break;
            case NotificationType.ERROR:
                NotificationManager.error(title, message, 5000, () => {
                    alert('callback');
                });
                break;
            default:
                NotificationManager.info('Info message');
                break;
        }
    };
};

export default CreateNotification;