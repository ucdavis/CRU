---
title: "Internal Recharges"
description: "Ability to create invoices that allow recharges using UCD chart strings for payment."
author: "Jason Sylvestre"
date: 2026-01-15
permalink: /documentation/payments/recharges
---

# Internal Recharges

## Access
Access to this feature is Team based. If you don't have access to this and would like to, please log into payments, select your team, choose Support on the right menu, then submit a help ticket with the Contact Us link.

## Team's Access
The team's access can be viewed from the settings menu. A badge shows the access available.
![Team Access](/payments/team-invoice-type-access.png "Teams Access to Invoice Types")

## Basic Rules
* If you enter the recharge invoice, and supply the debit chart strings, and enter your own email as the customer, then you can't do the payment approval step.
* Other than the above, anyone with a CAS login and the link to the payment page may do the payment approval step. This can involve entering or editing chart strings, notes, and approving.
* Recharges do not have tax or coupons. If you entered these for a credit card and switch to a recharge, they will be cleared out.
* Any chart string entered must be valid.
* The natural account portion of the chart string may be replaced automatically to either 775000 or 770006.
* One or more credit chart strings must be entered. They are not defaulted and the total must match the invoice total.
* If debit chart strings are entered, they must be valid and must match the total of the invoice.
### Payment Step
* The payment approval step does not have a reject option.
* The payment page allows valid debit chart strings to be entered and edited.
* Each chart string may have optional notes.
* Each chart string must have a valid $ amount.
* All amounts must add up the 100% of the invoice total.
* Invoices my not have coupons applied to them.
### Financial Approval Step
* The Financial Approval step only allows financial approvers determined by Aggie Enterprise's settings for the chart strings to act.
* Only valid chart strings may be entered and approved.
* Financial Approvers may reject the entire invoice.
* Financial Approvers may approve the chart strings they have access to.
* Financial Approvers may change the chart string they have access to to a different chart string they have access to.
* Financial approvers may not edit the amount or notes.
* The Financial Approval page may show various status information such as the status or access messages.
* The Financial Approval page will show who approved each chart string when approvals are done.
* There is a system configurable number of days where any pending Financial Approvals will by auto approved by the system. Currently this is 7 days. These will by logged and visible.
* When all chart strings are approved, the invoice will move along for the actual money movement.

## Workflow
* Create recharge invoice.
* Save or Send invoice.
* Edit saved invoice.
* Send unsent invoice.
* Customer gets email, opens CAS protected Payment page.
* Customer approves, or edits and approves invoice.
* Financial Approvers determined by Aggie Enterprise and debit chart strings used gets emails.
* Approvers 

## Functionality
* You may filter the existing list of invoices to either recharge or credit cards by typing recharge or credit into the search field.
* You may filter the invoices by any of the status listed in the filter. There are some new ones for recharges. Filters are sticky.
* You may enter a % for the cart string and it will try to update the amount. But it is the amount that is the saved field.

## Emails
### Customer notification:
![Customer Email Notification](/payments/recharge-customer-email.png "Customer Email Notification")
### Financial Approver notification:
![Financial Approver Email Notification](/payments/recharge-financial-approver-email.png "Financial Approver Email Notification")


## New Status Codes
* *Pending Approval* : Awaiting Financial Approval step
* *Approved* : Approved by all financial approvers, awaiting job to move the money
* *Rejected* : Rejected by either a financial approver, an automated check if a chart string has become invalid, or not approved in our application that actually moves the money around.

## Screen Shots
### Invoice List
![Invoice List](/payments/invoice-list.png "Invoice List")
### Email warning
* Recharges should email ucdavis.edu emails as you need to login to approve.
  
![Email Warning](/payments/email-warning.png "Email Warning")
### View Details
* You can click on View Details to expand the section for more info.

![View Details](/payments/history-view-details.png "View Details")




