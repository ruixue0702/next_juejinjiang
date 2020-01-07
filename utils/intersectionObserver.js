import 'intersection-observer';
/**
 * inview 某一dom元素进入视窗后，触发一次事件
 *
 * @param {Element} el DOM元素
 * @param  {Function} callback 回调
 */
export function inview(el, callback) {
    if (!el || !callback) {
        throw new Error('inview needs el && callback! ');
    }
    const io = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            callback();
            io.disconnect();
        }
    });
    io.observe(el);
}