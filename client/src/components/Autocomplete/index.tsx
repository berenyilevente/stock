/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Input } from "components";
import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { useTranslation } from "react-i18next";

export interface AutocompleteProps {
  label: string;
  filteredSuggestions: string[];
  activeSuggestionIndex: number;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showOptions: boolean;
  // eslint-disable-next-line no-unused-vars
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  id: string;
  type: HTMLInputTypeAttribute;
  name: string;
  autoComplete: string;
  value: string;
  onChange: ChangeEventHandler;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  filteredSuggestions,
  activeSuggestionIndex,
  label,
  type,
  name,
  autoComplete,
  id,
  value,
  onChange,
  onClick,
  onKeyDown,
  showOptions,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        type={type}
        label={label}
        id={id}
        name={name}
        onChange={onChange}
        onKeyDown={(e) => onKeyDown(e)}
        value={value}
        autoComplete={autoComplete}
        className={"mb-2"}
      />
      {showOptions && value && filteredSuggestions.length ? (
        <ul className="border border-slate-400 rounded list-none max-h-64 overflow-y-auto mb-4">
          {filteredSuggestions.map((suggestion, index) => {
            const className =
              index === activeSuggestionIndex ? "bg-slate-100" : "";
            return (
              <li
                className={`${className} hover:bg-slate-100 hover:cursor-pointer border-b border-slate-400 p-2 last-of-type:border-b-0`}
                key={suggestion}
                onClick={
                  onClick as unknown as React.MouseEventHandler<HTMLLIElement>
                }
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      ) : (
        showOptions &&
        value && (
          <ul className="border border-slate-400 rounded list-none max-h-64 overflow-y-auto">
            <li className="p-2">{t("general.notFound")}</li>
          </ul>
        )
      )}
    </>
  );
};

export default Autocomplete;
