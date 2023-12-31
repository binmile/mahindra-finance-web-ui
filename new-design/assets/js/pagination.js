const myarr = [{ "fd_Number": "N2003901F", "investment_date": "28 Sept 2021", "maturity_date": "28 Sept 2022", "tenure": "5", "investment_amount": "N/A", "maturity_amount": "22,656", "auto_renewal": "true", "status_val": 1 },
{ "fd_Number": "N2003901G", "investment_date": "17 July 2021", "maturity_date": "N/A", "tenure": "3", "investment_amount": "N/A", "maturity_amount": "22,656", "auto_renewal": "true", "status_val": 2 },
        { "fd_Number": "N2003901H", "investment_date": "22 Aug 2021", "maturity_date": "22 Oct 2021", "tenure": "5", "investment_amount": "35,000", "maturity_amount": "17,656", "auto_renewal": "false", "status_val": 3 },
        { "fd_Number": "N2003901I", "investment_date": "28 Sept 2021", "maturity_date": "28 Sept 2024", "tenure": "3", "investment_amount": "32,000", "maturity_amount": "22,384", "auto_renewal": "false", "status_val": 4 },
        { "fd_Number": "N2003901J", "investment_date": "28 Sept 2021", "maturity_date": "N/A", "tenure": "6", "investment_amount": "15,000", "maturity_amount": "21,056", "auto_renewal": "true", "status_val": 1 },
        { "fd_Number": "N2003901K", "investment_date": "28 Sept 2021", "maturity_date": "N/A", "tenure": "1", "investment_amount": "N/A", "maturity_amount": "32,616", "auto_renewal": "false", "status_val": 2 },
        { "fd_Number": "N2003901L", "investment_date": "28 Sept 2021", "maturity_date": "N/A", "tenure": "5", "investment_amount": "35,000", "maturity_amount": "22,656", "auto_renewal": "true", "status_val": 3 },
        { "fd_Number": "N2003901M", "investment_date": "28 Sept 2021", "maturity_date": "N/A", "tenure": "15", "investment_amount": "N/A", "maturity_amount": "23,556", "auto_renewal": "false", "status_val": 4 },
        { "fd_Number": "N2003901N", "investment_date": "28 Sept 2021", "maturity_date": "N/A", "tenure": "5", "investment_amount": "23,000", "maturity_amount": "22,656", "auto_renewal": "true", "status_val": 1 },
        { "fd_Number": "N2003901O", "investment_date": "28 Sept 2021", "maturity_date": "N/A", "tenure": "21", "investment_amount": "55,000", "maturity_amount": "2,656", "auto_renewal": "false", "status_val": 2 },
        { "fd_Number": "N2003901P", "investment_date": "28 Sept 2021", "maturity_date": "N/A", "tenure": "17", "investment_amount": "7,000", "maturity_amount": "22,656", "auto_renewal": "true", "status_val": 3 },
        { "fd_Number": "N2003901Q", "investment_date": "28 Sept 2021", "maturity_date": "N/A", "tenure": "4", "investment_amount": "44,502", "maturity_amount": "22,656", "auto_renewal": "false", "status_val": 4 },
        { "fd_Number": "N2003901R", "investment_date": "28 Sept 2021", "maturity_date": "N/A", "tenure": "3", "investment_amount": "6,930", "maturity_amount": "22,000", "auto_renewal": "false", "status_val": 1 }];

// on page load collect data to load pagination as well as table
const data = { "req_per_page": document.getElementById("req_per_page").value, "page_no": 1 };

// At a time maximum allowed pages to be shown in pagination div
const pagination_visible_pages = 4;


// hide pages from pagination from beginning if more than pagination_visible_pages
function hide_from_beginning(element) {
    if (element.style.display === "" || element.style.display === "block") {
        element.style.display = "none";
    } else {
        hide_from_beginning(element.nextSibling);
    }
}

// hide pages from pagination ending if more than pagination_visible_pages
function hide_from_end(element) {
    if (element.style.display === "" || element.style.display === "block") {
        element.style.display = "none";
    } else {
        hide_from_beginning(element.previousSibling);
    }
}

// load data and style for active page
function active_page(element, rows, req_per_page) {
    var current_page = document.getElementsByClassName('page_active');
    var next_link = document.getElementById('next_link');
    var prev_link = document.getElementById('prev_link');
    var next_tab = current_page[0].nextSibling;
    var prev_tab = current_page[0].previousSibling;
    current_page[0].className = current_page[0].className.replace("page_active", "");
    if (element === "next") {
        if (parseInt(next_tab.text).toString() === 'NaN') {
            next_tab.previousSibling.className += " page_active";
            next_tab.setAttribute("onclick", "return false");
        } else {
            next_tab.className += " page_active"
            render_table_rows(rows, parseInt(req_per_page), parseInt(next_tab.text));
            if (prev_link.getAttribute("onclick") === "return false") {
                prev_link.setAttribute("onclick", `active_page('prev',\"${rows}\",${req_per_page})`);
            }
            if (next_tab.style.display === "none") {
                next_tab.style.display = "block";
                hide_from_beginning(prev_link.nextSibling)
            }
        }
    } else if (element === "prev") {
        if (parseInt(prev_tab.text).toString() === 'NaN') {
            prev_tab.nextSibling.className += " page_active";
            prev_tab.setAttribute("onclick", "return false");
        } else {
            prev_tab.className += " page_active";
            render_table_rows(rows, parseInt(req_per_page), parseInt(prev_tab.text));
            if (next_link.getAttribute("onclick") === "return false") {
                next_link.setAttribute("onclick", `active_page('next',\"${rows}\",${req_per_page})`);
            }
            if (prev_tab.style.display === "none") {
                prev_tab.style.display = "block";
                hide_from_end(next_link.previousSibling)
            }
        }
    } else {
        element.className += " page_active";
        render_table_rows(rows, parseInt(req_per_page), parseInt(element.text));
        if (prev_link.getAttribute("onclick") === "return false") {
            prev_link.setAttribute("onclick", `active_page('prev',\"${rows}\",${req_per_page})`);
        }
        if (next_link.getAttribute("onclick") === "return false") {
            next_link.setAttribute("onclick", `active_page('next',\"${rows}\",${req_per_page})`);
        }
    }
}

// Render the table's row in table request-table
function render_table_rows(rows, req_per_page, page_no) {
    const response = JSON.parse(window.atob(rows));
    const resp = response.slice(req_per_page * (page_no - 1), req_per_page * page_no)
    $('#request-table').empty()
    $('#request-table').append('');
    resp.forEach(function (element) {
        if (Object.keys(element).length > 0) {
            const { fd_Number, investment_date, maturity_date, tenure, investment_amount, maturity_amount, auto_renewal, status_val } = element;
            const td = `<div class="listTabledata"><div class="tableData wd-12">${fd_Number}</div><div class="tableData wd-13">${investment_date}</div><div class="tableData wd-11">${maturity_date}</div><div class="tableData wd-11 text-center">${tenure}</div>${investment_amount === "N/A" ? `<div class="tableData wd-13">${investment_amount}</div>` : `<div class="tableData wd-13 font-bolder">₹ ${investment_amount}</div>`}<div class="tableData wd-13 font-bolder dark-green-font">₹  ${maturity_amount}</div><div class="tableData wd-11 all-center"><span class="form-check form-switch"><input type="checkbox" class="form-check-input" ${auto_renewal == "true" ? "checked" : ""} id="${fd_Number}" onclick="updateKycModal(this.id)" /></span></div><div class="tableData wd-12 all-center">${getPaymentStatus(status_val)}</div></div></div>`;
            $('#request-table').append(td)
        }
    });
}

function getPaymentStatus(statusId){
    if(statusId === 1){
        return `<div class="red-bg-label"><img src="./assets/img/icons/reload-icon.svg" alt="icon" />KYC pending</div>`;
    } else if(statusId === 2){
        return `<div class="red-bg-label"><img src="./assets/img/icons/reload-icon.svg" alt="icon" />Payment pending</div>`;
    } else if(statusId === 3){
        return `<div class="green-bg-label"><img src="./assets/img/icons/rupee-detail-green.svg" alt="icon" />Maturity soon</div>`;
    } else {
        return `<div class="green-bg-label"><img src="./assets/img/icons/round-tick.svg" alt="icon" />Active</div>`;
    }
}
// Pagination logic implementation
function pagination(data, myarr) {
    const all_data = window.btoa(JSON.stringify(myarr));
    $(".pagination").empty();
    if (data.req_per_page !== 'ALL') {
        let pager = `<a href="javascript:;" id="prev_link" onclick=active_page('prev',\"${all_data}\",${data.req_per_page})><img src="./assets/img/icons/arrow-left-red.svg" alt="before" /></a>` +
            `<a href="javascript:;" class="page_active" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>1</a>`;
        const total_page = Math.ceil(parseInt(myarr.length) / parseInt(data.req_per_page));
        if (total_page < pagination_visible_pages) {
            render_table_rows(all_data, data.req_per_page, data.page_no);
            for (let num = 2; num <= total_page; num++) {
                pager += `<a href="javascript:;" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
            }
        } else {
            render_table_rows(all_data, data.req_per_page, data.page_no);
            for (let num = 2; num <= pagination_visible_pages; num++) {
                pager += `<a href="javascript:;" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
            }
            for (let num = pagination_visible_pages + 1; num <= total_page; num++) {
                pager += `<a href="javascript:;" style="display:none;" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
            }
        }
        pager += `<a href="javascript:;" id="next_link" onclick=active_page('next',\"${all_data}\",${data.req_per_page})><img src="./assets/img/icons/arrow-left-red.svg" alt="after" /></a>`;
        $(".pagination").append(pager);
    } else {
        render_table_rows(all_data, myarr.length, 1);
    }
}

//calling pagination function
pagination(data, myarr);

// trigger when requests per page dropdown changes
// function filter_requests() {
//     const data = { "req_per_page": document.getElementById("req_per_page").value, "page_no": 1 };
//     pagination(data, myarr);
// }