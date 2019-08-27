export class subject {  
 subjectId:number                                    
 subjectName :string
}
export class type {
    typeId:number                                    
    typeName :string
 }
 export class course {
    courseId:number                                    
    courseName :string
 }
export class user {
    userCode :number
    userId :string
    userName:string 
    courseId? :number
    permission?:number;
}
export class content {
    contentId :number 
    contentName: string;
    toAge:number; 
    contentPath :string;
}
export class categoty {
    categoryId:number;
    categoryName:string;
}
