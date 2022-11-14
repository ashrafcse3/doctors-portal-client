export const getAppointStnEndTime = slots => {
    if (slots.length > 0) {
        const startingTimeArray = slots[0].split('-');
        const startingTime = startingTimeArray[0];

        const endTimeArray = slots[slots.length - 1].split('-');
        const endTime = endTimeArray[1];

        const fullTimeRange = `${startingTime} - ${endTime}`;

        return fullTimeRange;
    }
    return 'No slots available';
}