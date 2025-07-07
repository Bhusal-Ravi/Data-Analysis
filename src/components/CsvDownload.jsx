import React from 'react'
import { ArrowDownToLine } from 'lucide-react';
import { FileDown } from 'lucide-react';

function CsvDownload({ id }) {




    function handleDownload() {
        if (id) {

            window.open(`http://localhost:5001/api/downloadcsv/${id}`, '_blank');
        }
    }


    return (
        <div className="w-full max-w-7xl mx-auto mt-8">
            <div className="mb-4 p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200 shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                        <h3 className="text-lg flex font-bold text-emerald-800 mb-2"><span><FileDown className='mr-2' /></span>Your Dataset is Ready!</h3>
                        <p className="text-sm text-slate-600 mb-3">
                            Download your complete dataset in CSV format for easy analysis in Excel,
                            Google Sheets, or any other data processing tool.
                        </p>
                        <p className="text-xs text-slate-500">
                            The file will contain all columns and rows from your current dataset,
                            including any modifications you've made.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <button
                            className="flex cursor-pointer items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                            onClick={handleDownload}
                        >
                            <ArrowDownToLine className="w-5 h-5" />
                            <span>Download CSV</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CsvDownload