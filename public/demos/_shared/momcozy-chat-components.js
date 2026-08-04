/**
 * Reusable chat primitives for standalone demos.
 *
 * The DOM contract follows the editable shadcn InputGroup components used by
 * the playground. Visual decisions stay in the host theme's Momcozy semantic
 * tokens, so these primitives contain no product colors of their own.
 */
export function createMomcozyChatComponents({ jsx, jsxs }) {
  function InputGroup({ className = "", children, ...props }) {
    return jsx("div", {
      ...props,
      "data-slot": "input-group",
      role: "group",
      className: `group/input-group relative flex min-w-0 items-center border transition-colors outline-none ${className}`,
      children,
    });
  }

  function InputGroupInput({ className = "", ...props }) {
    return jsx("input", {
      ...props,
      "data-slot": "input-group-control",
      className: `min-w-0 flex-1 border-0 bg-transparent outline-none ${className}`,
    });
  }

  function InputGroupButton({ className = "", type = "button", ...props }) {
    return jsx("button", {
      ...props,
      type,
      "data-slot": "input-group-button",
      className: `inline-flex shrink-0 items-center justify-center rounded-full ${className}`,
    });
  }

  function ChatComposer({
    before = null,
    value,
    disabled = false,
    placeholder,
    onValueChange,
    onSubmit,
    submitLabel = "Send",
    submitContent = "↑",
  }) {
    const normalizedValue = value.trim();
    const canSubmit = !disabled && normalizedValue.length > 0;
    const submit = () => {
      if (canSubmit) onSubmit(normalizedValue);
    };

    return jsx("div", {
      "data-slot": "chat-composer",
      className: "border-t px-4 py-3 backdrop-blur",
      children: jsxs("div", {
        className: "mx-auto max-w-[420px]",
        children: [
          before,
          jsxs(InputGroup, {
            className: "gap-2 px-3 py-2",
            children: [
              jsx(InputGroupInput, {
                type: "text",
                value,
                disabled,
                placeholder,
                onChange: (event) => onValueChange(event.target.value),
                onKeyDown: (event) => {
                  if (event.key === "Enter") submit();
                },
                className: "text-[13px]",
              }),
              jsx(InputGroupButton, {
                disabled: !canSubmit,
                onClick: submit,
                "aria-label": submitLabel,
                className: "h-8 w-8 text-[12px]",
                children: submitContent,
              }),
            ],
          }),
        ],
      }),
    });
  }

  return {
    InputGroup,
    InputGroupInput,
    InputGroupButton,
    ChatComposer,
  };
}
