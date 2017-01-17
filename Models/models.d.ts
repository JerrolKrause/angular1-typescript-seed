declare class BootstrapFormGroup {
	Id: string
	Title: string
	Field: string
	ClassLabel: string
	ClassDivInput: string
	ReadOnly: boolean
	Filter: string
}

declare class BootstrapRowGroup {
	ClassColumn: string
	Forms: BootstrapFormGroup[]
}

declare class BootstrapPanel {
	Title: string
	ClassLabel: string
	ClassDivInput: string
	Rows: BootstrapRowGroup[]
}
declare class BorrowerInfo {
	firstName: string;
	lastName: string
	email: string
	ssn: string
	dob: Date
	borrowerIndex: number
}

declare class BorrowerStatus {
	firstName: string;
	lastName: string
	email: string
	invited: boolean
	confirmed: boolean
	verified: boolean
}

declare class LoanInfo {
	loanNumber: string
	propertyAddress: string
	interestRate: number
	loanAmount: number
	loanStatus: string
	loanType: string
	program: string;
	rateLock: string
	rateLockExpirationDate: Date
	borrowers: BorrowerInfo[]
}

declare class CPMessage {
	AddedByType: string
	Msg: string
	AddedBy: string
	AddedOn: Date
}

declare class CPMessageList {
	Message: CPMessage[]
}

declare class SendMessageDto {
	message: string
	borrowers: string
	ccEmail: string
}

declare class RequestDocDto {
	borrowerList: string[]
	requestType: number
	requestDocs: string[]
	notes: string
	ccEmail: string
}
declare class DOcWithNotes {
	requestDoc: string
	notes: string
}
declare class RequestDocWithNotesDto {
	borrowerList: string[]
	requestType: number
	requestDocs: DOcWithNotes[]
	notes: string
	ccEmail: string
}

declare class AcceptDocDto {
	docGuid: string
	acceptAs: string
	notes: string
	reRequest: boolean
}

declare class RejectDocDto {
	docGuid: string
	notes: string
}
declare class ReminderDto {
	borrowerGuid: string
	ccEmail: string
}
declare class DeleteDocRequestDto {
	DocumentName: string
	BorrowerGuid: string
}
declare class DefaultDocListDto {
	requestList: string[]
	wetSignList: string[]
	acknowledgeList: string[]
	markDocAsList: string[]
}
declare class LoanSearchCriteriaDto {
	UserId: string
	LoanNumber: string
	BorrowerLastName: string
	BorrowerFirstName: string
	BorrowerEmailAddress: string
	BorrowerSsn: string
	PropertyAddress: string
	PropertyCity: string
	PropertyState: string
	PropertyZipCode: string
	IncludeFundedLoans: string
	IncludeTestLoans: string
	Rows: number
	Offset: number
}

// queue related structures
declare enum ActionType {
	None = 0,
	AccuracyYes = 1,
	AccuracyNo = 2,
	QualifyYes = 11,
	QualifyNo = 12,
}

declare class AccuracyQueue {
	DocGuid: string;
	LoanNumber: string;
	DocName: string;
	DocUrl: string;
}
declare class QualifyQueue {
	DocGuid: string;
	LoanNumber: string;
	DocName: string;
	AccuracyState: ActionType;
	QualifyState: ActionType;
}


interface IUser {
	BranchId: number
	BranchName: string
	EmailAddress: string
	PhoneExtension: string
	PhoneNumber: string
	Title: string
	UserName: string
	Channel: string
}
interface IContact {
	title: string
	name: string
	email: string
	checked: boolean
}

interface IApproveDoc {
    userId: string,
    docGuid: string,
    acceptAs: string,
    notes: string,
    reRequest: boolean
}