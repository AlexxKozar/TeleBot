export const formatDate = (date) => {
    date = [
        '0' + date.getDate(),
        '0' + (date.getMonth() + 1),
        '' + date.getFullYear(),
        '0' + date.getHours(),
        '0' + date.getMinutes()
    ].map(component => component.slice(-2));
    
    return date.slice(0, 3).join('.') + ' ' + date.slice(3).join(':');
}