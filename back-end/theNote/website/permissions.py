from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsOwnerOrCollaboratorOrStaffOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        return bool(
            request.method in SAFE_METHODS or
            request.user and
            request.user.is_authenticated and (
                obj.owner == request.user or
                obj.is_collaborator(request.user) or
                request.user.is_staff
            )
        )