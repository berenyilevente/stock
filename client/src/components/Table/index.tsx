/* eslint-disable valid-typeof */
/* eslint-disable no-underscore-dangle */
import { Button, DropdownMenu, Modal } from "components";
import LoadingSpinner from "components/LoadingSpinner";
import React, { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export interface Column {
  header: string;
  columnKey: string;
}
export interface ArrayDataColumn {
  columnKey: string;
}

interface TableProps<Data> {
  tableData: Data[];
  tableTitle: ReactNode;
  columns: Column[];
  arrayDataColumn?: ArrayDataColumn[];
  totalCount: number;
  deleteAction?: (id: string) => void;
  isLoading: boolean;
  route?: string;
  hasMenu: boolean;
  menuText?: string;
  stockRoute?: string;
}

const Table: React.FC<TableProps<any>> = ({
  tableData,
  tableTitle,
  columns,
  arrayDataColumn,
  totalCount,
  deleteAction,
  isLoading,
  route,
  hasMenu,
  menuText,
  stockRoute,
}) => {
  const { t } = useTranslation();
  const [deleteItemid, setDeleteItemId] = useState<string>("");
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <LoadingSpinner isLoading={isLoading}>
      {tableData.length ? (
        <table className="whitespace-nowrap">
          <thead className="bg-white border-solid rounded border border-b-0 border-slate-400">
            <tr>
              <td className="flex text-lg p-4">
                <p className="font-bold pr-8">{tableTitle} </p>
                {totalCount}
              </td>
            </tr>
          </thead>
          <tbody className="border-solid border border-slate-400 rounded-b-xl">
            <tr className="border-solid border border-slate-400 border-b-0 bg-slate-200 uppercase ">
              {columns.map((headerItem) => (
                <td key={headerItem.columnKey} className="px-4 py-4">
                  {headerItem.header}
                </td>
              ))}
              <td className="flex justify-end"></td>
            </tr>
            {tableData.map((item) => (
              <tr
                // eslint-disable-next-line no-underscore-dangle
                key={item._id}
                className="border-solid border-t border-slate-400"
              >
                {columns.map((col) => (
                  <td
                    key={col.columnKey}
                    className="font-light truncate px-4 py-4"
                  >
                    {(Array.isArray(item[col.columnKey]) &&
                      item[col.columnKey].map((arrayItem: any) =>
                        arrayDataColumn!.map(
                          (arrayCol) => `${arrayItem[arrayCol.columnKey]}, `
                        )
                      )) ||
                      item[col.columnKey]}
                  </td>
                ))}
                <td>
                  {hasMenu && (
                    <DropdownMenu
                      menuItems={
                        <>
                          {stockRoute && (
                            <Button
                              className="border-none hover:underline"
                              onClick={() => {
                                navigate(`${stockRoute}${item._id}`);
                              }}
                            >
                              {menuText}
                            </Button>
                          )}
                          <Button
                            className="border-none hover:underline"
                            onClick={() => {
                              navigate(`${route}${item._id}`);
                            }}
                          >
                            {t("general.edit")}
                          </Button>
                          <Button
                            className="border-none hover:underline"
                            onClick={() => {
                              setDeleteItemId(item._id);
                              setShowDeleteModal(true);
                            }}
                          >
                            {t("general.delete")}
                          </Button>
                        </>
                      }
                    ></DropdownMenu>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table>
          <thead className="bg-white whitespace-nowrap border-solid rounded border border-slate-400">
            <tr>
              <td className="text-lg">
                <p className="font-bold px-12 py-4">{t("general.noData")} </p>
              </td>
            </tr>
          </thead>
        </table>
      )}
      <Modal
        showModal={showDeleteModal}
        closeModal={() => setShowDeleteModal(false)}
        title={t("general.delete")}
      >
        <Button
          onClick={() => {
            setShowDeleteModal(false);
          }}
          className="border-none"
        >
          {t("general.cancel")}
        </Button>
        <Button
          onClick={() => {
            dispatch(deleteAction!(deleteItemid));
            setShowDeleteModal(false);
          }}
          className="border-red-600 px-12"
        >
          {t("general.yes")}
        </Button>
      </Modal>
    </LoadingSpinner>
  );
};

export default Table;
