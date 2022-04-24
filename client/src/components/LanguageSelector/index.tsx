import { FC, useCallback } from "react";
import i18n from "i18n";
import { Icon, Link } from "components";
import { useOutsideClickHandler } from "utils";

interface Props {}

const LanguageSelector: FC<Props> = () => {
  const languages = [
    {
      key: "en",
    },
    {
      key: "ger",
    },
    {
      key: "hu",
    },
  ];
  const { visible, setVisible, ref } = useOutsideClickHandler(false);
  const language = languages.filter(
    (flag) => flag.key !== i18n.language.toUpperCase()
  );

  const onSelectClick = useCallback(
    (key) => {
      i18n.changeLanguage(key.toLowerCase());
      setVisible(false);
    },
    [setVisible]
  );

  return (
    <div className={"select-none w-min"} ref={ref}>
      <Icon
        iconType="earth"
        onClick={() => setVisible(!visible)}
        className="cursor-pointer"
      ></Icon>
      {visible ? (
        <div className="mt-1 p-2 border border-slate-400 rounded-lg bg-white border-blackLight-1">
          {language.map(({ key }) => (
            <div className="p-1" key={key.toString()}>
              <Link onClick={() => onSelectClick(key)}>
                {(key === "en" && (
                  <Icon iconType="flagEn" className="cursor-pointer"></Icon>
                )) ||
                  (key === "ger" && (
                    <Icon iconType="flagGer" className="cursor-pointer"></Icon>
                  )) ||
                  (key === "hu" && (
                    <Icon iconType="flagHu" className="cursor-pointer"></Icon>
                  ))}
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default LanguageSelector;
