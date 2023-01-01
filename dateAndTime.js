exports.getDateAndTime = () => {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        hour: '2-digit',
        minute: "2-digit"
    };

    const today = new Date();

    return today.toLocaleString("en-US", options);
}