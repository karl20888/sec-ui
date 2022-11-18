const getReference = (el, binding, vnode) => {
  const ref = binding.expression ? binding.value : binding.arg;
  const popper = vnode.context.$refs[ref];
  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.popover.$refs.reference = el;
    } else {
      popper.$refs.popover.$refs.reference = el;
    }
  }
};

export default {
  bind(el, binding, vnode) {
    getReference(el, binding, vnode);
  },
  inserted(el, binding, vnode) {
    getReference(el, binding, vnode);
  },
};
