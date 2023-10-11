export function openBooking(){
    document.querySelectorAll('.tin-cta').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelector('.redeem-offer-modal').classList.add('is-active');
        });
    });
}